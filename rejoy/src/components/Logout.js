import React from "react";
import authStore from "../stores/authStore";

export default function Logout() {
  return (
    <button className="btn btn-default" onClick={() => authStore.logout()}>
      Log out {authStore.user.username}
    </button>
  );
}
