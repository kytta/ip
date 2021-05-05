import { VercelRequest, VercelResponse } from "@vercel/node";
import { getClientIp } from "@supercharge/request-ip";

export default (req: VercelRequest, res: VercelResponse) => {
	res.status(200).send(getClientIp(req))
}
