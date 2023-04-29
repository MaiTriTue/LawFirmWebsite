import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styles from './NewPost.module.scss';

const cx = classNames.bind(styles);

function NewPost(props) {
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
            {IsCheck &&
                PostData.map((item, index) => {
                    return (
                        <div className={cx('wrapper-newpost_list-item')} key={index}>
                            <Link to={item.link} className={cx('newpost_list-item_link')}>
                                {item.name}
                            </Link>
                        </div>
                    );
                })}
        </div>
    );
}

export default NewPost;
