import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styles from './SlidesService.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SlidesService(props) {
    const dispatch = useDispatch();
    const { title, data } = props;
    const [PostData, setPostData] = useState({ name: '', link: '' });
    const [IsCheck, setIsCheck] = useState(false);
    const [WidthItemSlides, setWidthItemSlides] = useState(0);
    const slidesRef = useRef(null);
    const slidesItemRef = useRef(null);

    useEffect(() => {
        if (data) {
            setPostData(data);
            setIsCheck(true);
        }
    }, []);

    useEffect(() => {
        changeSlides(WidthItemSlides);
    }, [WidthItemSlides]);

    useEffect(() => {
        changeSlides(WidthItemSlides);
    }, [WidthItemSlides]);

    useEffect(() => {
        const timeInter = setInterval(() => {
            setWidthItemSlides(
                WidthItemSlides == slidesItemRef.current.clientWidth * 4
                    ? 0
                    : WidthItemSlides + slidesItemRef.current.clientWidth,
            );
        }, 8000);

        return () => {
            clearInterval(timeInter);
        };
    }, [WidthItemSlides]);

    const handleNextSlides = () => {
        setWidthItemSlides(
            WidthItemSlides == slidesItemRef.current.clientWidth * 4
                ? 0
                : WidthItemSlides + slidesItemRef.current.clientWidth,
        );
    };

    const handlePrevSlides = () => {
        setWidthItemSlides(
            WidthItemSlides == 0
                ? slidesItemRef.current.clientWidth * 4
                : WidthItemSlides - slidesItemRef.current.clientWidth,
        );
    };

    const changeSlides = (number) => {
        slidesRef.current.style.marginLeft = '-' + number + 'px';
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-slides_service')}>
                <div className={cx('wrapper-slides_service-title')}>
                    <Link to={'#'} className={cx('slides_service-title')}>
                        <h3>{title && title}</h3>
                    </Link>
                    <div className={cx('wrapper-slides_service-control')}>
                        <div className={cx('service-control')} onClick={handlePrevSlides}>
                            <FontAwesomeIcon icon={faChevronLeft} className={cx('service-control_left')} />
                        </div>
                        <div className={cx('service-control')} onClick={handleNextSlides}>
                            <FontAwesomeIcon icon={faChevronRight} className={cx('service-control_right')} />
                        </div>
                    </div>
                </div>
                <div className={cx('slides-service')} ref={slidesRef}>
                    {IsCheck &&
                        PostData.map((item, index) => {
                            return (
                                <div className={cx('wrapper-slides-service_item')} key={index} ref={slidesItemRef}>
                                    <div className={cx('wrapper-slides-service_item-image')}>
                                        <Link to={item.link} className={cx('slides-service_item-link')}>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className={cx('slides-service_item-img')}
                                            />
                                        </Link>
                                    </div>
                                    <div className={cx('wrapper-slides-service_item-title')}>
                                        <Link to={item.link} className={cx('slides-service_item-link')}>
                                            <h3 className={cx('slides-service_item-title')}>{item.title}</h3>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default SlidesService;
