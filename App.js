import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function Loading() {
    const ColorList = [
        {
            color1: "red",
            color2: "gold",
            color3: "blue",
        },
        {
            color1: "blue",
            color2: "red",
            color3: "gold",
        },
        {
            color1: "gold",
            color2: "blue",
            color3: "red",
        },
    ];
    let cellIn = 0;
    const [cell, setCell] = useState(ColorList[cellIn]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (cellIn == 2){
              cellIn = 0;
              setCell(ColorList[cellIn]);
            }
            else if (cellIn == 1 || cellIn == 0){
              cellIn = cellIn + 1;
              setCell(ColorList[cellIn]);
            }
        }, 1000);
        // return () => clearInterval(interval);
    },[cell]);

    console.log(cellIn);

    return (
        <View style={{ flexDirection: "row" }}>
            <View
                style={{
                    backgroundColor: cell.color1,
                    width: 100,
                    height: 100,
                }}
            />
            <View
                style={{
                    backgroundColor: cell.color2,
                    top: 20,
                    left: 20,
                    width: 100,
                    height: 100,
                }}
            />
            <View
                style={{
                    backgroundColor: cell.color3,
                    width: 100,
                    height: 100,
                }}
            />
        </View>
    );
}

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            <Loading />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
