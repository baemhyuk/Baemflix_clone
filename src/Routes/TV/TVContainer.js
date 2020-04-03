import React from "react";
import TVPresent from "./TVPresenter";

export default class extends React.Component {
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        loading: true,
        error: null
    }

    render() {
        const {topRated, popular, airingToday, loading, error} = this.state;
        return (
            <TVPresent
                topRated={topRated}
                popular={popular}
                airingToday={airingToday}
                loading={loading}
                error={error}/>
        );
    }
}