import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Cookies from "js-cookie";

const LogoutPage = () => {

  useEffect(() => {
    Cookies.remove("bearerToken")
    window.location.href = "/login";
  }, [])


  return (
    <Layout>
      <p className="text-center py-5">Déconnexion en cours...</p>
    </Layout>
  );
};

export default LogoutPage;
