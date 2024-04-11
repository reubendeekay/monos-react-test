import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const PrivateLayout = () => {
  return (
    <div>
      <div
        style={{
          height: 72,
          background: "transparent",
        }}
      />
      <Container maxW="container.xl" minH={"calc(100vh - 72px)"}>
        <Outlet />
      </Container>
    </div>
  );
};
