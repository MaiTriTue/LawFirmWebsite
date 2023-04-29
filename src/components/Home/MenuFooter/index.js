import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { faChevronRight, faHouseChimney } from '@fortawesome/free-solid-svg-icons';

import styles from './MenuFooter.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function MenuFooter(props) {
    const dispatch = useDispatch();
    const { data } = props;
    const [PostData, setPostData] = useState({ name: '', link: '' });
    const [IsCheck, setIsCheck] = useState(false);

    useEffect(() => {
        if (data) {
            setPostData(data);
            setIsCheck(true);
        }
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-menu-footer')}>
                <div className={cx('menu-footer_one')}>
                    <ul className={cx('menu-footer_one-list')}>
                        <li>
                            <div className={cx('menu-footer_one-title')}>
                                <Link to={'#'} className={cx('one-title_link')}>
                                    <FontAwesomeIcon icon={faHouseChimney} className={cx('one-title_icon')} />
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_one-title')}>
                                <Link to={'#'} className={cx('one-title_link')}>
                                    <h4>Đặt làm trang chủ</h4>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_one-title')}>
                                <Link to={'#'} className={cx('one-title_link')}>
                                    <h4>Gửi câu hỏi trực tuyến</h4>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_one-title')}>
                                <Link to={'#'} className={cx('one-title_link')}>
                                    <h4>Gửi yêu cầu dịch vụ</h4>
                                </Link>
                            </div>
                        </li>
                        <li>
                            {' '}
                            <div className={cx('menu-footer_one-title')}>
                                <Link to={'#'} className={cx('one-title_link')}>
                                    <h4>Việc làm tại Minh Khuê</h4>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_one-title')}>
                                <Link to={'#'} className={cx('one-title_link')}>
                                    <h4>RSS</h4>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_one-title')}>
                                <Link to={'#'} className={cx('one-title_link')}>
                                    <h4>Sitemap</h4>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_one-title')}>
                                <Link to={'#'} className={cx('one-title_link')}>
                                    <h4>Liên hệ</h4>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={cx('menu-footer_two')}>
                    <ul className={cx('menu-footer_two-list')}>
                        <li>
                            <div className={cx('menu-footer_two-title')}>
                                <Link to={'#'} className={cx('two-title_link')}>
                                    <span>Giới thiệu</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            {' '}
                            <div className={cx('menu-footer_two-title')}>
                                <Link to={'#'} className={cx('two-title_link')}>
                                    <span>Dịch vụ Luật sư</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_two-title')}>
                                <Link to={'#'} className={cx('two-title_link')}>
                                    <span>Tư vấn Pháp luật</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_two-title')}>
                                <Link to={'#'} className={cx('two-title_link')}>
                                    <span>Văn bản pháp luật</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            {' '}
                            <div className={cx('menu-footer_two-title')}>
                                <Link to={'#'} className={cx('two-title_link')}>
                                    <span>Biểu mẫu</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_two-title')}>
                                <Link to={'#'} className={cx('two-title_link')}>
                                    <span>Giáo dục</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_two-title')}>
                                <Link to={'#'} className={cx('two-title_link')}>
                                    <span>Thông tin hữu ích</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_two-title')}>
                                <Link to={'#'} className={cx('two-title_link')}>
                                    <span>Video</span>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={cx('menu-footer_three')}>
                    <ul className={cx('menu-footer_three-list')}>
                        <li>
                            <div className={cx('menu-footer_three-title')}>
                                <FontAwesomeIcon icon={faChevronRight} className={cx('three-title_icon')} />
                                <Link to={'#'} className={cx('three-title_link')}>
                                    <span>Tư vấn luật doanh nghiệp</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            {' '}
                            <div className={cx('menu-footer_three-title')}>
                                <FontAwesomeIcon icon={faChevronRight} className={cx('three-title_icon')} />
                                <Link to={'#'} className={cx('three-title_link')}>
                                    <span>Tư vấn luật đầu tư</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_three-title')}>
                                <FontAwesomeIcon icon={faChevronRight} className={cx('three-title_icon')} />
                                <Link to={'#'} className={cx('three-title_link')}>
                                    <span>Tư vấn luật lao động</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_three-title')}>
                                <FontAwesomeIcon icon={faChevronRight} className={cx('three-title_icon')} />
                                <Link to={'#'} className={cx('three-title_link')}>
                                    <span>Tư vấn luật thuế</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            {' '}
                            <div className={cx('menu-footer_three-title')}>
                                <FontAwesomeIcon icon={faChevronRight} className={cx('three-title_icon')} />
                                <Link to={'#'} className={cx('three-title_link')}>
                                    <span>Tư vấn luật sở hữu trí tuệ</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_three-title')}>
                                <FontAwesomeIcon icon={faChevronRight} className={cx('three-title_icon')} />
                                <Link to={'#'} className={cx('three-title_link')}>
                                    <span>Tư vấn luật hình sự</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_three-title')}>
                                <FontAwesomeIcon icon={faChevronRight} className={cx('three-title_icon')} />
                                <Link to={'#'} className={cx('three-title_link')}>
                                    <span>Tư vấn luật dân sự</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_three-title')}>
                                <FontAwesomeIcon icon={faChevronRight} className={cx('three-title_icon')} />
                                <Link to={'#'} className={cx('three-title_link')}>
                                    <span>Tư vấn luật thừa kế</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_three-title')}>
                                <FontAwesomeIcon icon={faChevronRight} className={cx('three-title_icon')} />
                                <Link to={'#'} className={cx('three-title_link')}>
                                    <span>Tư vấn luật đất đai</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_three-title')}>
                                <FontAwesomeIcon icon={faChevronRight} className={cx('three-title_icon')} />
                                <Link to={'#'} className={cx('three-title_link')}>
                                    <span>Tư vấn luật hôn nhân</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_three-title')}>
                                <FontAwesomeIcon icon={faChevronRight} className={cx('three-title_icon')} />
                                <Link to={'#'} className={cx('three-title_link')}>
                                    <span>Tư vấn luật bảo hiểm xã hội</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_three-title')}>
                                <FontAwesomeIcon icon={faChevronRight} className={cx('three-title_icon')} />
                                <Link to={'#'} className={cx('three-title_link')}>
                                    <span>Tư vấn luật giao thông</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_three-title')}>
                                <FontAwesomeIcon icon={faChevronRight} className={cx('three-title_icon')} />
                                <Link to={'#'} className={cx('three-title_link')}>
                                    <span>Tư vấn luật hành chính</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_three-title')}>
                                <FontAwesomeIcon icon={faChevronRight} className={cx('three-title_icon')} />
                                <Link to={'#'} className={cx('three-title_link')}>
                                    <span>Tư vấn luật đấu thầu</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_three-title')}>
                                <FontAwesomeIcon icon={faChevronRight} className={cx('three-title_icon')} />
                                <Link to={'#'} className={cx('three-title_link')}>
                                    <span>Tư vấn luật nghĩa vụ quân sự</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_three-title')}>
                                <FontAwesomeIcon icon={faChevronRight} className={cx('three-title_icon')} />
                                <Link to={'#'} className={cx('three-title_link')}>
                                    <span>Tư vấn luật ngân hàng</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_three-title')}>
                                <FontAwesomeIcon icon={faChevronRight} className={cx('three-title_icon')} />
                                <Link to={'#'} className={cx('three-title_link')}>
                                    <span>Đăng ký thương hiệu độc quyền</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx('menu-footer_three-title')}>
                                <FontAwesomeIcon icon={faChevronRight} className={cx('three-title_icon')} />
                                <Link to={'#'} className={cx('three-title_link')}>
                                    <span>Đăng ký quyền tác giả</span>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* {IsCheck &&
                PostData.map((item, index) => {
                    return (
                        <div className={cx('wrapper-newpost_list-item')} key={index}>
                            <Link to={item.link} className={cx('newpost_list-item_link')}>
                                {item.name}
                            </Link>
                        </div>
                    );
                })} */}
        </div>
    );
}

export default MenuFooter;
