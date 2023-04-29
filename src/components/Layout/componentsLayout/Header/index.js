import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faBars,
    faEnvelope,
    faHouseChimney,
    faPhone,
    faSortDown,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import cookies from 'react-cookies';
import Select from 'react-select';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { searchIcon, cartIcon, couponCode, userIcon, wishlists } from '~/assets/iconVector';
import { Logout } from '~/app/userSlice';
import { changeTotalPrice } from '~/pages/CartPage/TotalPriceSlice';
import MobileHeader from './MobileHeader';
import { MENUS_NAV } from '~/constants/Global';
import { ChangeToPrice, LangueOptions, categoryOption, colourStyles, ChangeToSlug } from '~/constants/Global';
import { NavbarData, SubNavbarData } from '~/FakeDatas';

import SelectBase from '~/components/common/SelectBase';
import SearchList from '~/components/Header/SearchList';
import productApi from '~/Apis/productApi';

const cx = classNames.bind(styles);

function Header() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.current);
    const totalPrice = useSelector((state) => state.totalPrice);
    const [indexMenu, setIndexMenu] = useState(0);
    const navigate = useNavigate();
    const mobileMenuRef = useRef(null);
    const mobileHeaderRef = useRef(null);
    const cartProduct = useSelector((state) => state.cartPage);
    const [userLogin, setUserLogin] = useState('');
    const [searchvalue, setsearchvalue] = useState('');
    const [nameList, setNameList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [offsetOdd, setOffsetOdd] = useState(0);
    const [count, setCount] = useState(0);
    const [likes, setLikes] = useState(0);
    const [totalPriceState, setTotalPriceState] = useState(0);
    const [navbarData, setNavbarData] = useState('');
    const [subnavbarData, setSubNavbarData] = useState('');

    useEffect(() => {
        setNavbarData(NavbarData);
        setSubNavbarData(SubNavbarData);
    }, []);

    useEffect(() => {
        const fetchSearchNameProduct = async () => {
            try {
                const params = {
                    page: 1,
                    value: searchvalue,
                };
                const response = await productApi.getNameList(params);
                setNameList(response.data.results);
                console.log('fetch New product list: ', response);
            } catch (error) {
                console.log('Failed to fetch New product list: ', error);
            }
        };
        if (searchvalue) {
            console.log(searchvalue);
            fetchSearchNameProduct();
        }
    }, [searchvalue]);

    return (
        <div className={cx('wrapper')} ref={mobileHeaderRef}>
            <div className={cx('gallery-display-area')}>
                <div className={cx('wrapper-header_contact')}>
                    <div className={cx('wrapper-header_contact-childent')}>
                        <div className={cx('contact-hotline')}>
                            <div className={cx('contact-hotline_phone')}>
                                <a href={'#'} className={cx('contact-hotline_phone-link')}>
                                    <FontAwesomeIcon icon={faPhone} className={cx('contact-hotline_phone-icon')} />
                                </a>
                                <a href={'#'} className={cx('contact-hotline_phone-link')}>
                                    <div className={cx('contact-hotline_phone-number')}>
                                        Hotline: <span> 19006162</span>
                                    </div>
                                </a>
                            </div>
                            <div className={cx('contact-hotline_rss')}>
                                <a href={'#'} className={cx('contact-hotline_phone-link')}>
                                    <span>RSS</span>
                                </a>
                            </div>
                        </div>
                        <div className={cx('contact-email')}>
                            <a href={'#'} className={cx('contact-hotline_phone-link')}>
                                <FontAwesomeIcon icon={faEnvelope} className={cx('contact-hotline_email-icon')} />
                            </a>
                            <a href={'#'} className={cx('contact-hotline_phone-link')}>
                                <span>Truy cập mail</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={cx('wrapper-header_logo')}>
                    <div className={cx('wrapper-header_logo-childent')}>
                        <div className={cx('wrapper-header_logo-img')}>
                            <a className={cx('wrapper-header_logo-link')}>
                                <img src={images.LogoCompany} alt="logo" className={cx('header_logo-img')} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={cx('wrapper-header_navbar')}>
                    <div className={cx('wrapper-header_navbar-childent')}>
                        <ul className={cx('header-navbar_list')}>
                            {navbarData &&
                                navbarData.map((item, index) => {
                                    if (index == 0) {
                                        return (
                                            <li className={cx('header-navbar_list-item')} key={index}>
                                                <a href={item.link} className={cx('list-item_link-tc')}>
                                                    <FontAwesomeIcon
                                                        icon={item.name}
                                                        className={cx('header-navbar_list-item-icon')}
                                                    />
                                                </a>
                                            </li>
                                        );
                                    } else if (index == 3) {
                                        return (
                                            <li className={cx('header-navbar_list-item-tree')} key={index}>
                                                <a href={item.link} className={cx('header-navbar_list-item-link')}>
                                                    {item.name}
                                                    <FontAwesomeIcon
                                                        icon={faAngleDown}
                                                        className={cx('list-item_tree-icon')}
                                                    />
                                                </a>

                                                <div className={cx('header-navbar_sub-list')}>
                                                    <ul className={cx('sub-list')}>
                                                        {subnavbarData &&
                                                            subnavbarData.map((item, index) => {
                                                                return (
                                                                    <li className={cx('sub-list_item')} key={index}>
                                                                        <a
                                                                            href={item.link}
                                                                            className={cx('sub-list_item-link')}
                                                                        >
                                                                            {item.name}
                                                                        </a>
                                                                    </li>
                                                                );
                                                            })}
                                                    </ul>
                                                </div>
                                            </li>
                                        );
                                    } else {
                                        return (
                                            <li className={cx('header-navbar_list-item')} key={index}>
                                                <a href={item.link} className={cx('header-navbar_list-item-link')}>
                                                    {item.name}
                                                </a>
                                            </li>
                                        );
                                    }
                                })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
