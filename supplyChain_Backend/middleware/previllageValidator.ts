// middleware for doing role-based permissions
function permit(...allowed) {
    const isAllowed = (role) => {
        console.log("indexOF", allowed.indexOf(role))
        if (allowed.indexOf(role) > -1)
            return 1;
        else
            return 0;
    }

    // return a middleware
    return (request, response, next) => {
        console.log(request.body.role)
        if ((request.body.FarmerName && isAllowed(request.body.role)))
            next(); // role is allowed, so continue on the next middleware
        else {
            response.status(403).json({ message: "user is forbidden" }); // user is forbidden
        }
    }
}

module.exports = { permit }