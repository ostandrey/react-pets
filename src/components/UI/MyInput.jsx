import React from 'react';

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input
            ref={ref}
            type="text"
            className={props.className}
            placeholder="Search for breeds by name"
            {...props}

            // value={searchQuery}
            // onChange={e => setSearchQuery(e.target.value)}
        />
    );
});

export default MyInput;