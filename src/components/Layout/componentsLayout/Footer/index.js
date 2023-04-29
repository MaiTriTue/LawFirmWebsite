import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleLeft,
    faAngleRight,
    faBuildingFlag,
    faDiamondTurnRight,
    faDisplay,
    faEnvelope,
    faEnvelopeOpenText,
    faGlobe,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import images from '~/assets/images';

import styles from './Footer.module.scss';
import { faAndroid, faApple, faBootstrap, faFacebook } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-logo')}>
                <div className={cx('logo')}>
                    <Link to={'#'}>
                        <img
                            src={'https://luatminhkhue.vn/Content/images/lg.png'}
                            alt="logo"
                            className={cx('logo-img')}
                        />
                    </Link>
                </div>
                <div className={cx('wrapper-support')}>
                    <span className={cx('support-content')}>
                        Hỗ trợ 24/7:
                        <Link to={'tel:000000000'}>19001001</Link>
                    </span>
                </div>
                <div className={cx('wrapper-service')}>
                    <span className={cx('service-content')}>
                        Yêu cầu dịch vụ:
                        <Link to={'tel:0354418590'}>0354.418.590</Link>
                    </span>
                </div>
                <div className={cx('wrapper-btn_one')}>
                    <Link to={'#'}>
                        <span className={cx('service-content')}>ĐẶT CÂU HỎI TRỰC TUYẾN</span>
                    </Link>
                </div>
                <div className={cx('wrapper-btn_two')}>
                    <Link to={'#'}>
                        <span className={cx('service-content')}>ĐẶT LỊCH HẸN LUẬT SƯ</span>
                    </Link>
                </div>
            </div>
            <div className={cx('wrapper-address_one')}>
                <div className={cx('address_one-title')}>
                    <h3 className={cx('address_one-title-content')}>VĂN PHÒNG HÀ NỘI:</h3>
                </div>
                <div className={cx('address_one')}>
                    <span>
                        <FontAwesomeIcon icon={faBuildingFlag} className={cx('address_one-icon')} />
                        <strong>Trụ sở chính:</strong> Phòng 2007, Tòa nhà C2, D' Capitale (Vincom Trần Duy Hưng), Số
                        119, Đường Trần Duy Hưng, Trung Hòa, Cầu Giấy, Tp. Hà Nội. [{' '}
                        <Link to={'#'}>
                            <FontAwesomeIcon icon={faDiamondTurnRight} className={cx('address_one-icon-direct')} />
                            <span className={cx('address_one-icon-direct')}>Chỉ đường</span>
                        </Link>{' '}
                        ]
                    </span>
                </div>
                <div className={cx('address_one-phone')}>
                    <span>
                        <FontAwesomeIcon icon={faPhone} className={cx('address_one-icon')} />
                        <strong>Điện thoại:</strong>{' '}
                        <Link to={'tel:0354418590'}>
                            <span className={cx('address_one-phone_number')}>0354.418.590</span>
                        </Link>
                    </span>
                </div>
                <div className={cx('address_one-email')}>
                    <span>
                        <FontAwesomeIcon icon={faEnvelope} className={cx('address_one-icon')} />
                        <strong>Email:</strong>
                        <Link to={'mailto:HacTinhThan@gmail.com'}>
                            <span className={cx('address_one-email_detail')}>HacTinhThan@gmail.com</span>
                        </Link>
                    </span>
                </div>
            </div>
            <div className={cx('wrapper-address_two')}>
                <div className={cx('address_two-title')}>
                    <h3 className={cx('address_two-title-content')}>VĂN PHÒNG TP HỒ CHÍ MINH:</h3>
                </div>

                <div className={cx('address_one')}>
                    <span>
                        <FontAwesomeIcon icon={faBuildingFlag} className={cx('address_one-icon')} />
                        <strong>Địa chỉ:</strong> Phòng 2007, Tòa nhà C2, D' Capitale (Vincom Trần Duy Hưng), Số 119,
                        Đường Trần Duy Hưng, Trung Hòa, Cầu Giấy, Tp. Hà Nội. [{' '}
                        <Link to={'#'}>
                            <FontAwesomeIcon icon={faDiamondTurnRight} className={cx('address_one-icon-direct')} />
                            <span className={cx('address_one-icon-direct')}>Chỉ đường</span>
                        </Link>{' '}
                        ]
                    </span>
                </div>
                <div className={cx('address_one-phone')}>
                    <span>
                        <FontAwesomeIcon icon={faPhone} className={cx('address_one-icon')} />
                        <strong>Điện thoại:</strong>{' '}
                        <Link to={'tel:0354418590'}>
                            <span className={cx('address_one-phone_number')}>0354.418.590</span>
                        </Link>
                    </span>
                </div>
                <div className={cx('address_one-email')}>
                    <span>
                        <FontAwesomeIcon icon={faEnvelope} className={cx('address_one-icon')} />
                        <strong>Email:</strong>
                        <Link to={'mailto:HacTinhThan@gmail.com'}>
                            <span className={cx('address_one-email_detail')}>HacTinhThan@gmail.com</span>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
