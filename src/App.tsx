import React from "react";
import { Image, Stack, View } from "react-xnft";
import { Home } from "./home";
import { Screen } from "./screen";
import { ScreenW1 } from "./screen-w1";
import { ScreenW2 } from "./screen-w2";

export function App() {
  return (
    <View style={{ background: "black", height: "100%" }}>
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
                title: "Not working",
              };
            case "screen-w1":
              return {
                title: "Workaraound 1",
              };
            case "screen-w2":
              return {
                title: "Workaraound 2",
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
        <Stack.Screen
          name={"screen-w1"}
          component={(props: any) => <ScreenW1 {...props} />}
        />
        <Stack.Screen
          name={"screen-w2"}
          component={(props: any) => <ScreenW2 {...props} />}
        />
      </Stack.Navigator>
    </View>
  );
}
