import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Cookies from "js-cookie";

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Cookies.remove("bearerToken")
    navigate("/login")
  }, [])


  return (
    <Layout>
      <p className="text-center py-5">Déconnexion en cours...</p>
    </Layout>
  );
};

export default LogoutPage;
