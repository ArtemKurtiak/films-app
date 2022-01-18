import React from "react";

import {BasicFilmType} from "../../store/reducers/types";
import './FilmItem.scss';
import {constants} from "../../constants";
import {useDispatch} from "react-redux";
import {
    deleteFilmFromCartActionCreator,
    getFilmsFromCartActionCreator
} from "../../store/action-creators/cart.action-creator";

type Props = {
    handleClick: (filmId: number) => void;
    deleteAccess?: boolean;
}

const FilmItem: React.FC<BasicFilmType & Props> = ({
                                                       title,
                                                       poster_path,
                                                       popularity,
                                                       handleClick,
                                                       id,
                                                       deleteAccess = false
                                                   }) => {
    const dispatch = useDispatch();

    const deleteHandler = async (e: any) => {
        e.stopPropagation();

        await dispatch(deleteFilmFromCartActionCreator({filmId: id}))
        await dispatch(getFilmsFromCartActionCreator());
    }

    return <div
        className={'filmItem'}
        onClick={() => {
            handleClick(id)
        }}
    >
        {
            deleteAccess &&
            <button className={'film-delete'} onClick={deleteHandler} >Delete</button>
        }
        {
            poster_path ?
                <img className={'film-image'} src={`${constants.imagesUrl}${poster_path}`} alt=""/> :
                <img className={'film-image'} src="https://wallpapercave.com/wp/wp3494202.jpg" alt=""/>
        }
        <div className={'film-item-title'}>
            {title}
        </div>
        <div className={'film-item-popularity'}>
            Popularity: {popularity}
        </div>
    </div>
}

export default FilmItem;