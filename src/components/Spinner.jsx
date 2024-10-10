import { Oval } from 'react-loader-spinner';

const override = {
    display: 'block',
    margin: '200px auto',
};

// eslint-disable-next-line react/prop-types
const Spinner = ({ loading }) => {
    return (
        <Oval
            color='#4338ca'
            loading={loading}
            cssOverride={override}
            size={150}
        />
    );
};
export default Spinner;