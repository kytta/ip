import { getClientIp } from "@supercharge/request-ip";

/**
 * Handles request and returns user's IP address in response
 *
 * @param {import("@vercel/node").VercelRequest} req
 * @param {import("@vercel/node").VercelResponse} res
 */
export default (req, res) => {
	if (req.method !== 'GET') {
		res.status(405).send("Method not allowed.");
    return;
	}

	const ip = getClientIp(req);
	res.status(ip ? 200 : 404).send(ip ? ip : "0.0.0.0");
}
