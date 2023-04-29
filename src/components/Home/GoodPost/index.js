import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styles from './GoodPost.module.scss';

const cx = classNames.bind(styles);

function GoodPost(props) {
    const dispatch = useDispatch();
    const { data } = props;
    const [PostData, setPostData] = useState({ title: '', link: '', image: '', discription: '' });
    const [IsCheck, setIsCheck] = useState(false);

    useEffect(() => {
        if (data) {
            setPostData(data);
            setIsCheck(true);
        }
    }, []);

    return (
        <div className={cx('wrapper')}>
            {IsCheck &&
                PostData.map((item, index) => {
                    return (
                        <div className={cx('wrapper-post')}>
                            <div className={cx('wrapper-post_image')}>
                                <Link to={item.link}>
                                    <img src={item.image} alt="images post" className={cx('wrapper-post_image-img')} />
                                </Link>
                            </div>
                            <div className={cx('wrapper-post_content')}>
                                <Link to={'#'}>
                                    <h3 className={cx('wrapper-post_title')}>{item.title}</h3>
                                </Link>
                                <p className={cx('wrapper-post_discripsion')}>{item.discription}</p>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default GoodPost;
