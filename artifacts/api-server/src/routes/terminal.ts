import { Router } from 'express';
import { exec } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';

const router = Router();

const BASE_DIR = path.join(os.tmpdir(), 'sk-terminal');

async function ensureDir(dir: string) {
  try { await fs.mkdir(dir, { recursive: true }); } catch {}
}

router.post('/terminal/exec', async (req, res) => {
  const { command, project } = req.body as { command: string; project?: string };
  if (!command || typeof command !== 'string') {
    return res.status(400).json({ error: 'Comando invÃ¡lido' });
  }

  const safeProject = (project || 'default').replace(/[^a-zA-Z0-9_-]/g, '_');
  const workDir = path.join(BASE_DIR, safeProject);
  await ensureDir(workDir);

  const BLOCKED = ['rm -rf /', 'dd if=', ':(){:|:&};:', 'mkfs', 'shutdown', 'reboot', 'halt'];
  if (BLOCKED.some((b) => command.includes(b))) {
    return res.json({ stdout: '', stderr: 'Comando bloqueado por seguranÃ§a.', exitCode: 1, cwd: workDir });
  }

  const timeout = command.startsWith('npm ') || command.startsWith('pip ') || command.startsWith('yarn ') ? 120000 : 30000;

  exec(command, { cwd: workDir, timeout, maxBuffer: 1024 * 1024 * 5 }, async (error, stdout, stderr) => {
    let cwd = workDir;
    try {
      const realCwd = await fs.realpath(workDir);
      cwd = realCwd;
    } catch {}

    res.json({
      stdout: stdout || '',
      stderr: stderr || '',
      exitCode: error?.code ?? (error ? 1 : 0),
      cwd,
    });
  });
});

router.get('/terminal/cwd', async (req, res) => {
  const project = ((req.query.project as string) || 'default').replace(/[^a-zA-Z0-9_-]/g, '_');
  const workDir = path.join(BASE_DIR, project);
  await ensureDir(workDir);
  res.json({ cwd: workDir });
});

export default router;
