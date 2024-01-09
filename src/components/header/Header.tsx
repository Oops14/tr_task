import React from "react";
import s from "./header.module.css";

export const Header = () => {
    return (
        <div className={s.container}>
            <div className={s.main_header_inner}>
                <h3 className={s.header_title}>ADMIN.BIKE-BOOKING.COM</h3>
            </div>
        </div>
    );
};
