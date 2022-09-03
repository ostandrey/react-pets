import React, {useEffect, useState} from 'react';
import classes from "./Gallery.module.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import MyButton from "../../components/UI/MyButton";
import MyModal from "../../components/UI/modal/MyModal";
import {useFetching} from "../../hooks/useFetching";
import DogService from "../../API/DogService";
import Loader from "../../components/UI/Loader/Loader";
import Pagination from "../../components/UI/pagination/Pagination";
import {getPageCount} from "../../utils/pages";

const Gallery = () => {
    const [modal, setModal] = useState(false);
    const [isHovering, setIsHovering] = useState(null);
    const [imageId, setImageId] = useState('');
    const [file, setFile] = useState(null);
    const [uploadedImages, setUploadedImages] = useState(null);
    const [breedNames, setBreedNames] = useState([]);

    const [filterValue, setFilterValue] = useState({
        order: "RANDOM",
        type: "jpg,png,gif",
        breed_id: '',
        limit: 5
    })
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const [fetchBreedNames, isBreedNamesLoading, breedNamesError] = useFetching(async () => {
        const response = await DogService.getAllBreeds();
        setBreedNames(response.data);
    });

    const [fetchUploadedImages, isUploadedImagesLoading, uploadedImagesError] = useFetching(async (filterValue, page) => {
        const response = await DogService.getRandomBreeds(filterValue, page);
        setUploadedImages(response.data);
        const totalCount = response.headers['pagination-count']
        setTotalPages(getPageCount(totalCount, filterValue.limit));
    });

    const [uploadImage, isUploadImageLoading, uploadImageError, uploadImageSuccess] = useFetching(async (file) => {
        await DogService.uploadImage(file);
    });

    const [fetchFavourites, isFavouritesLoading, favouritesError] = useFetching(async () => {
        await DogService.saveFavorite(imageId);
    });

    const onSubmit = (e) => {
        e.preventDefault();
        const formData  = new FormData();
        formData.append('file', file)
        uploadImage(formData);
    }

    const refresh = () => {
        fetchUploadedImages(filterValue, page)
    }

    useEffect(() => {
        fetchBreedNames();
        fetchUploadedImages(filterValue, page);
        if(uploadImageSuccess) {
            setFile(null)
        }
        if(imageId) {
            fetchFavourites(imageId)
        }
    }, [page, uploadImageSuccess, imageId])

    const changePage = (page) => {
        setPage(page)
    }

    const handleMouseOver = (id) => {
        setIsHovering(id);
    };

    const handleMouseOut = () => {
        setIsHovering(null);
    };

    return (
        <section className={classes.content_wrapper}>
            <div className={classes.control_panel}>
                <Breadcrumb/>
                <MyButton className={classes.upload_btn} onClick={() => setModal(true)}>
                    <img src={require('../../assets/upload.png')} alt="upload" />
                    Upload
                </MyButton>
                <MyModal visible={modal} setVisible={setModal} onClick={() => setModal(false)}>
                    <MyButton className={classes.close_btn} onClick={() => setModal(false)}>
                        <img src={require('../../assets/close.png')} alt="close" />
                    </MyButton>
                    <div className={classes.title_block}>
                        <h1 className={classes.modal_title}>Upload a .jpg or .png Cat Image</h1>
                        <h3 className={classes.modal_subtitle}>Any uploads must comply with the
                            <a href="https://thecatapi.com/privacy"
                               target="_blank"
                               className={classes.text_link}
                            > upload guidelines </a>
                            or face deletion.
                        </h3>
                    </div>
                    <form method="post" action="#" className={classes.files}>
                            <input type="file" multiple='' onChange={e => setFile(e.target.files[0])}/>
                            {
                                !file && <>
                                    <img src={require('../../assets/not-found-image.png')} alt="close" />
                                    <p>
                                        <span>Drag here </span>
                                        your file or
                                        <span> Click here </span>
                                        to upload
                                    </p>
                                </>
                            }
                            {
                                file && <div  className={classes.file_img}>
                                    <img src={URL.createObjectURL(file)} alt="dog"/>
                                </div>
                            }
                    </form>
                    {
                        !file && <h3 className={classes.modal_subtitle}>No file selected</h3>
                    }
                    {
                        file && <div className={classes.upload_actions}>
                            <h3 className={classes.modal_subtitle}>Image File Name: {file.name}</h3>
                            {
                                !isUploadImageLoading &&
                                <MyButton className={classes.upload_btn} onClick={onSubmit}>Upload photo</MyButton>
                            }
                            {
                                isUploadImageLoading &&
                                <MyButton className={classes.upload_btn} disabled={true}>Uploading</MyButton>
                            }
                        </div>
                    }
                    {
                        uploadImageError && <div className={classes.upload_message}>
                            <img src={require('../../assets/error.png')} alt="error"/>
                            <p>No Dog found - try a different one</p>
                        </div>
                    }
                    {
                        uploadImageSuccess && <div className={classes.upload_message}>
                            <img src={require('../../assets/success.png')} alt="success"/>
                            <p>Thanks for the Upload - Dog found!</p>
                        </div>
                    }
                </MyModal>
            </div>
            <div className={classes.gallery_group}>
                <div className={classes.gallery_group_item}>
                    <label className={classes.gallery_group_title}>Order</label>
                    <select className={classes.select}
                            value={filterValue.order}
                            onChange={(e) =>
                                setFilterValue({
                                    order: e.target.value,
                                    type: filterValue.type,
                                    breed_id: filterValue.breed_id,
                                    limit: filterValue.limit,
                                })}
                    >
                        <option value="RANDOM">Random</option>
                        <option value="ASC">Ascending</option>
                        <option value="DESC">Descending</option>
                    </select>
                </div>
                <div className={classes.gallery_group_item}>
                    <label className={classes.gallery_group_title}>Type</label>
                    <select className={classes.select}
                            value={filterValue.type}
                            onChange={(e) =>
                                setFilterValue({
                                    order: filterValue.order,
                                    type:  e.target.value,
                                    breed_id: filterValue.breed_id,
                                    limit: filterValue.limit,
                                })}
                    >
                        <option value="jpg, png, gif">All</option>
                        <option value="jpg, png">Static</option>
                        <option value="gif">Animated</option>
                    </select>
                </div>
                <div className={classes.gallery_group_item}>
                    <label className={classes.gallery_group_title}>Breed</label>
                    <select className={classes.select}
                            value={filterValue.breed_id}
                            onChange={(e) =>
                                setFilterValue({
                                    order: filterValue.order,
                                    type: filterValue.type,
                                    breed_id: e.target.value,
                                    limit: filterValue.limit,
                                })}
                    >
                        <option value="">None</option>
                        {
                            breedNames.map((breedName) =>
                                <option value={breedName.id}>{breedName.name}</option>
                            )
                        }
                    </select>
                </div>
                <div className={classes.gallery_group_item}>
                    <div>
                        <label className={classes.gallery_group_title}>Limit</label>
                        <select className={classes.select}
                                value={filterValue.limit}
                                onChange={(e) =>
                                    setFilterValue({
                                        order: filterValue.order,
                                        type: filterValue.type,
                                        breed_id: filterValue.breed_id,
                                        limit: Number(e.target.value),
                                    })}
                        >
                            <option value={5}>Limit: 5</option>
                            <option value={10}>Limit: 10</option>
                            <option value={15}>Limit: 15</option>
                            <option value={20}>Limit: 20</option>
                        </select>
                    </div>
                    <MyButton className={classes.upload_btn} onClick={refresh}>
                        <img src={require('../../assets/refresh.png')} alt="refresh" />
                    </MyButton>
                </div>
            </div>

            {isUploadedImagesLoading
                ? <Loader/>
                :
                <div className={classes.grid_container}>
                    {
                        uploadedImagesError && <h1>Error(</h1>
                    }
                    {
                        uploadedImages && uploadedImages.map(item =>
                            <div className={classes.container} key={item.id}
                                 onMouseOver={() => handleMouseOver(item.id)}
                                 onMouseOut={handleMouseOut}
                            >
                                {
                                    item && <img
                                        src={`${item.url}`}
                                        alt="breed"
                                        className={classes.image}
                                    />
                                }
                                {isHovering === item.id && (
                                    <div className={classes.container_hover}
                                         onClick={() => setImageId(item.id)}
                                    >
                                        <div className={classes.name_hover}>
                                            <img src={require('../../assets/heart.png')} alt="favourite" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    }
                </div>
            }
            <Pagination
                totalPages={totalPages}
                changePage={changePage}
            />
            {/*<div className={classes.grid_container}>*/}
            {/*    <div className={classes.div1}></div>*/}
            {/*    <div className={classes.div2}></div>*/}
            {/*    <div className={classes.div3}></div>*/}
            {/*    <div className={classes.div4}></div>*/}
            {/*    <div className={classes.div5}></div>*/}
            {/*</div>*/}
        </section>
    );
};

export default Gallery;