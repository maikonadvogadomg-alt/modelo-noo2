import { Router, type IRouter } from "express";
import healthRouter from "./health";
import terminalRouter from "./terminal";

const router: IRouter = Router();

router.use(healthRouter);
router.use(terminalRouter);

export default router;
