module.exports = {
  httpCodes: {
    success: 200,
    successfulCreate: 201,
    redirect: 302,
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    conflict: 409,
    internalServerError: 500,
    notImplemented: 501
  },
  userMessageConstants: {
    userAlreadyExist: "You are already a logged in User",
    emptyBody: "No Data is present to process the request",
    userIdNotPresent: "Mobile Number is not present",
    usernameNotPresent: "Name is not present"
  },
  groupMessageConstants: {
    emptyBody: "No Data is present to create the group",
    userIdNotPresent: "Mobile number should be present to create the group",
    groupNameNotPresent: "Group name should not be empty",
    groupAlreadyExist : "Group name already exist. Please use different group name"
  },
  collections: {
    users: "users",
    groups: "groups"
  }

};