import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import './FilmsPage.scss';
import {useSelectorWithTypes} from "../../hooks";
import FilmItem from "../../components/FilmItem/FilmItem";
import {getFilmsActionCreator} from "../../store/action-creators";
import FilmItemModal from "../../components/FilmItemModal/FilmItemModal";

const FilmsPage: React.FC = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filmId, setFilmId] = useState<number>(0);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    useEffect(() => {
        dispatch(getFilmsActionCreator(searchTerm.toLowerCase()));

        //eslint-disable-next-line
    }, [searchTerm])

    const {films} = useSelectorWithTypes(state => state.films);

    return <div className={'page'}>
        <div className={'search-part'}>
            <input
                onChange={(e) => {
                    setTimeout(() => {
                        setSearchTerm(e.target.value)
                    }, 500)
                }}
                className={'search-part-input'}
                type="text"
                placeholder={'Search film by title'}
            />
        </div>
        <div className={'films-list'}>
            {films.map((item) => {
                return <FilmItem
                    {...item}
                    key={item.id}
                    handleClick={(id: number) => {
                        setFilmId(id);
                        setModalOpen(true);
                    }}/>
            })}
        </div>
        <FilmItemModal filmId={filmId} isOpen={modalOpen} setOpen={setModalOpen}/>
    </div>
}

export default FilmsPage;