import React from "react";
import { Image, Stack } from "react-xnft";
import { Home } from "./home";
import { Screen } from "./Screen";

export function App() {
  return (
    <Stack.Navigator
      initialRoute={{ name: "home" }}
      style={{
        display: "flex",
        justifyContent: "flex-start",
      }}
      options={({ route }) => {
        switch (route.name) {
          case "home":
            return {
              title: "Home",
            };
          case "screen":
            return {
              title: "Screen",
            };
          default:
            throw new Error("unknown route");
        }
      }}
    >
      <Stack.Screen
        name={"home"}
        component={(props: any) => <Home {...props} />}
      />
      <Stack.Screen
        name={"screen"}
        component={(props: any) => <Screen {...props} />}
      />
    </Stack.Navigator>
    // </View>
  );
}
