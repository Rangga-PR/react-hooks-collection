import { useEffect, useState } from "react";

function usePermission(name: PermissionName) {
  const [status, setStatus] = useState<string>();
  let currentPermission: PermissionStatus;

  function handleChange() {
    status.value = currentPermission.state;
  }

  useEffect(() => {
    navigator.permissions.query({ name }).then((permission) => {
      currentPermission = permission;
      status.value = currentPermission.state;
    });

    currentPermission.addEventListener("change", handleChange);

    return () => {
      currentPermission.removeEventListener("change", handleChange);
    };
  }, []);

  return { status };
}

export default usePermission;
