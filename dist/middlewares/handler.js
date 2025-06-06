export function handler(controller, methodName) {
    return async (req, res, next) => {
        try {
            const result = await controller[methodName](req, res, next);
            return result;
        }
        catch (error) {
            next(error);
        }
    };
}
