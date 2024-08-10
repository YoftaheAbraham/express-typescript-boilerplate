import { Response, Request } from "express"
export const HomePage = (req: Request, res: Response) => {
    res.json({
        message: "Hello world"
    })
}
