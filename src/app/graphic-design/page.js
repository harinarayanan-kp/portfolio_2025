import React from "react";
import styles from "../custom.module.css";


const graphicdesign = [
    "/graphicdesign/gd1.png",
    "/graphicdesign/gd2.png",
    "/graphicdesign/gd3.png",
];

const GraphicDesignPage = () => {
    return (
        <div
            className={styles.scrollbar}
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 10,
                maxWidth: "90vw",
                margin: "0 auto",
            }}
        >
            {graphicdesign.map((imageUrl, index) => (
                <img
                    key={index}
                    src={imageUrl}
                    alt={`Graphic Design ${index + 1}`}
                    style={{
                        height: "auto",
                        width: "100%",
                        backgroundColor: "red",
                    }}
                />
            ))}
        </div>
    );
};

export default GraphicDesignPage;