import { rolePermissions } from "./rolePermissions";

export function checkRole(user: any, requiredRole: any) {
    if (!user) {
        return false;
    }
    
    return user.role === requiredRole
}

export function checkPermissions(user: any, requiredRole: any) {
    if (!user) {
        return false;
    }
    const user_permissions = rolePermissions[user.role];
    return user_permissions?.includes(requiredRole)
}

export function checkRoleAndPermissions(
    user: any,
    requiredRole: any,
    requiredPermissions:any
) {
    return (
        checkRole(user, requiredRole) &&
        checkPermissions(user, requiredPermissions)
    );
}