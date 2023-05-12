import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const checksIfAdminOrOrdinaryUser = (request: Request, response: Response, next: NextFunction): void => {
    const { admin , userId } = response.locals;

    const idParams = request.params.id;

    if(!admin && Number(userId) !== Number(idParams)){
        throw new AppError("Insufficient permission", 403);
    };

    return next();
};

export default checksIfAdminOrOrdinaryUser;