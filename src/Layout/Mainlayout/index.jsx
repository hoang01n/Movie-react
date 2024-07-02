import React, {useContext} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Context} from "../../context/AppProvider";
import GlobalLoading from "../../components/Global-loading";
import {GoToTop} from "../../components/Go-to-top";
const MainLayout = ({children}) => {
  const {hidenLoading} = useContext(Context);
  return (
    <>
      <GlobalLoading hiden={hidenLoading} />
      <GoToTop />
      <Header />
      <div className="content-deafaultLayout">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
