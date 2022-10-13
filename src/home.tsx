import React, { useState, useEffect } from "react";
import { Text, useNavigation, View, Image, Button } from "react-xnft";
import { useEffectAsync } from "./utils";

const buttonStyle: React.CSSProperties = {
  background: "white",
  color: "black",
  width: "35%",
  margin: "15px",
  textAlign: "center",
  borderRadius: "5px",
  cursor: "pointer",
};

export function Home() {
  const nav = useNavigation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);

  return (
    <View>
      <View
        style={buttonStyle}
        onClick={() => {
          nav.push("screen", {});
        }}
      >
        With problems
      </View>
      <View
        style={buttonStyle}
        onClick={() => {
          nav.push("screen-w1", {});
        }}
      >
        Workaraound 1
      </View>
      <View
        style={buttonStyle}
        onClick={() => {
          nav.push("screen-w2", {});
        }}
      >
        Workaraound 2
      </View>
    </View>
  );
}
