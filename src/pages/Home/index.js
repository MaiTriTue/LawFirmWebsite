import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import {
    BillBeard,
    BillBeardSale,
    GoodPost,
    MenuFooter,
    NewPost,
    PostByTopic,
    SearchForm,
    SlideCategory,
    SlidesService,
    TrendingProduct,
} from '~/components';

import { CATEGORY_DATAS } from '~/constants/Global';
import productApi from '~/Apis/productApi';
import { flagAmerica, flagEngland, flagVietNam } from '~/assets/iconVector';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import { DICHVU_LUATSU, DICHVU_NOIBAT, GoodPostData, NewPostData, TUVAN_PHAPLUAT, TVL_DOANHNGHIEP } from '~/FakeDatas';

const cx = classNames.bind(styles);

function Home() {
    const [searchData, setSearchData] = useState({ value: '' });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log('Tìm kiếm: ', searchData);
    };
    const handleSearchChange = (event) => {
        setSearchData({ value: event.target.value });
        console.log('Tìm kiếm: ', searchData);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-languages')}>
                <Link to={'#'} className={cx('languages-link')}>
                    <div className={cx('languages-vietnames')}>
                        <div className={cx('wrapper-languages-vietnames_img')}>
                            <img src={flagVietNam} alt="Cờ việt Nam" className={cx('languages-vietnames_img')} />
                        </div>
                        <span className={cx('languages-vietnames_name')}>Việt Nam</span>
                    </div>
                </Link>
                <Link to={'#'} className={cx('languages-link')}>
                    <div className={cx('languages-english')}>
                        <div className={cx('wrapper-languages-english_img')}>
                            <img src={flagEngland} alt="Cờ anh" className={cx('languages-english_img')} />
                        </div>
                        <span className={cx('languages-english_name')}>English</span>
                    </div>
                </Link>
            </div>
            <div className={cx('wrapper-new-post')}>
                <div className={cx('wrapper-newpost')}>
                    <div className={cx('wrapper-new-post_list-title')}>
                        <h3 className={cx('wrapper-newpost-title')}></h3>
                    </div>
                    <Link to={'#'}>
                        <img src={images.gauBongHoatHinh} alt="images post" className={cx('wrapper-newpost_img')} />
                    </Link>
                    <Link to={'#'}>
                        <h3 className={cx('wrapper-newpost_title')}>
                            Viết đoạn văn với chủ đề Sách là để đọc, không phải để trưng bày hay nhất
                        </h3>
                    </Link>
                    <p className={cx('wrapper-newpost_discripsion')}>
                        Những cuốn sách là nơi lưu giữ nguồn tri thức của nhân loại. Đọc sách có thể đem đến cho con
                        người rất nhiều lợi ích. Hôm nay, Luật Minh Khuê sẽ cung cấp những đoạn văn mẫu với chủ đề Sách
                        là để đọc, không phải để trưng bày.
                    </p>
                </div>
                <div className={cx('wrapper-newpost_list')}>
                    <div className={cx('wrapper-newpost_list-title')}>
                        <h3 className={cx('newpost_list-title')}>Bài viết mới nhất</h3>
                    </div>
                    <div className={cx('wrapper-newpost_list-body')}>
                        <NewPost data={NewPostData} />
                    </div>
                </div>
                <div className={cx('wrapper-search')}>
                    <div className={cx('wrapper-search_title')}>
                        <h3 className={cx('search_title')}>Tìm kiếm</h3>
                    </div>
                    <div className={cx('wrapper-search_body')}>
                        <div className={cx('wrapper-search_body-form')}>
                            <SearchForm
                                value={searchData}
                                onChange={handleSearchChange}
                                onSubmit={handleSearchSubmit}
                            />
                        </div>
                        <div className={cx('wrapper-search_body-example')}></div>
                    </div>
                </div>
            </div>
            <div className={cx('wrapper-old-post')}>
                <div className={cx('wrapper-old-post_all')}>
                    <GoodPost data={GoodPostData} />
                </div>
                <div className={cx('wrapper-old-post_topic')}>
                    <div className={cx('wrapper-topic')}>
                        <PostByTopic title={'Dịch vụ Luật sư'} linkTopic={'#'} data={DICHVU_LUATSU} />
                        <PostByTopic title={'Tư vấn Pháp luật'} linkTopic={'#'} data={TUVAN_PHAPLUAT} />
                        <PostByTopic title={'Tư vấn luật doanh nghiệp'} linkTopic={'#'} data={TVL_DOANHNGHIEP} />
                    </div>
                </div>
            </div>
            <div className={cx('wrapper-slides_service')}>
                <div className={cx('slides-servicce')}>
                    <SlidesService title={'Dịch Vụ Nổi Bật'} data={DICHVU_NOIBAT} />
                </div>
            </div>
            <div className={cx('wrapper-menu-footer')}>
                <div className={cx('menu-footer')}>
                    <MenuFooter title={'Dịch Vụ Nổi Bật'} data={DICHVU_NOIBAT} />
                </div>
            </div>
        </div>
    );
}

export default Home;
