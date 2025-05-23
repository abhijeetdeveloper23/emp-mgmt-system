import userResolvers from "./userResolvers";
import employeeResolvers from "./employeeResolvers";
import dashboardResolvers from "./dashboardResolvers";

// Merge all resolvers
export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...employeeResolvers.Query,
    ...dashboardResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...employeeResolvers.Mutation,
  },
};
