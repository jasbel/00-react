import React from 'react';

import { useState } from 'react';
import { Button, Tooltip } from 'reactstrap';


const StrapPage = () => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);
    return (
        <div>
            <Button color="primary"> button </Button>
            <p>Somewhere in here is a <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipExample">tooltip</span>.</p>
            <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
                Hello world!
            </Tooltip>
        </div>
    )
}

export default StrapPage
