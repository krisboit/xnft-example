import React, { useState, useEffect } from "react";
import { Text, useNavigation, View, Image } from "react-xnft";
import { useEffectAsync } from "./utils";

export function ScreenW2() {
  const nav = useNavigation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);

  useEffectAsync(async () => {
    setTimeout(() => {
      setLoading(true);
    }, 16);
    const response = await fetch(
      "https://assets.tiexo.com/xnft/metadata_v4.json"
    ).then((res) => res.json());
    console.log(response);

    setTimeout(() => {
      setData(response);
      setLoading(false);
    }, 16);
  }, []);

  return (
    <View>
      {loading && (
        <View>
          <View
            style={{
              width: "100%",
              height: "100%",
              overflowX: "hidden",
              position: "relative",
            }}
          ></View>
        </View>
      )}
      {!loading &&
        data?.properties?.files.map((item) => (
          <Image
            key={item.uri}
            src={item.uri}
            style={{ width: "40%", margin: "10px" }}
            // onClick={() => {
            //   nav.push("screen", {});
            //   console.log("aloha");
            // }}
          />
        ))}
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
}
