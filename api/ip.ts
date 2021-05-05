import { VercelRequest, VercelResponse } from "@vercel/node";
import { getClientIp } from "@supercharge/request-ip";

export default (req: VercelRequest, res: VercelResponse) => {
	const ip = getClientIp(req);
	res.status(ip ? 200 : 404).send(ip ?? "0.0.0.0");
}
