import crypto from "crypto";
import { Request, Response, NextFunction } from "express";
import NodeCache from "node-cache";

const cache = new NodeCache();

export function checkCache(req: Request, res: Response, next: NextFunction): void {
  // Created a unique cache key based on the URL and the request body
  const requestBody = JSON.stringify(req.body || {});
  const key = `${req.originalUrl}:${crypto.createHash("md5").update(requestBody).digest("hex")}`;

  // Checking if a cached response exists
  const cachedResponse = cache.get(key);

  // If a cached response exists, send it back to the client
  if (cachedResponse) {
    console.log("Cache hit for", key);
    res.status(201).json(cachedResponse);
    return;
  }

  // If no cached response, override res.json to cache the response
  const originalJson = res.json;

  res.json = (body: any): Response => {
    console.log("Cache miss for", key);
    cache.set(key, body); // Cache the JSON response
    return originalJson.call(res, body); // Send the response as usual
  };

  next(); // Proceed to the next middleware or route handler
}
