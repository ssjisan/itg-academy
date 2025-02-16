import { useState } from "react";

export default function MobileDrawer() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(true);
    };
    const handleDrawerClose=()=>{
        setOpen(false);
    }
    return (
        {
            toggleDrawer, open,handleDrawerClose
        }
    )
}
