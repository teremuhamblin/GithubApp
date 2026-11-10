// src/plugins/sandbox.js
export function createScopedOctokit(octokit, allowedPermissions) {
  return new Proxy(octokit, {
    get(target, prop) {
      if (prop === 'rest') {
        return new Proxy(target.rest, {
          get(restTarget, scope) {
            // Ex: "issues", "pulls"
            return new Proxy(restTarget[scope], {
              get(endpointTarget, method) {
                const isWrite = /^(create|update|delete|add|remove)/.test(method);
                const requiredPerm = `${scope}:${isWrite ? 'write' : 'read'}`;

                if (!allowedPermissions.includes(requiredPerm)) {
                  throw new Error(`[Permission Denied] Le plugin n'a pas la permission : ${requiredPerm}`);
                }
                return endpointTarget[method];
              }
            });
          }
        });
      }
      return target[prop];
    }
  });
}
