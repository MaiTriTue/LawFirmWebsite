import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styles from './PostByTopic.module.scss';

const cx = classNames.bind(styles);

function PostByTopic(props) {
    const dispatch = useDispatch();
    const { title, linkTopic, data } = props;
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
            <div className={cx('wrapper-topic_item')}>
                <div className={cx('wrapper-topic_item-title')}>
                    <Link to={'#'}>
                        <h4 className={cx('topic_item-title')}>{title}</h4>
                    </Link>
                </div>
                <div className={cx('wrapper-topic_item-content')}>
                    {IsCheck &&
                        PostData.map((item, index) => {
                            if (index == 0) {
                                return (
                                    <div className={cx('item-content_newpost')}>
                                        <div className={cx('item-content_newpost-title')}>
                                            <Link to={linkTopic}>
                                                <h4 className={cx('newpost-title')}>{item.title}</h4>
                                            </Link>
                                        </div>
                                        <div className={cx('item-content_newpost-content')}>
                                            <div className={cx('item-content_image')}>
                                                <img
                                                    src={item.image}
                                                    alt={'image post'}
                                                    className={cx('item-content_image-img')}
                                                />
                                            </div>
                                            <p className={cx('item-content_discription')}>{item.discription}</p>
                                        </div>
                                    </div>
                                );
                            }
                        })}

                    <div className={cx('item-content_newquestion')}>
                        {IsCheck &&
                            PostData.map((item, index) => {
                                if (index != 0 && index <= 3) {
                                    return (
                                        <Link to={item.link}>
                                            <p className={cx('topic_item-question')}>{item.title}</p>
                                        </Link>
                                    );
                                }
                            })}
                    </div>
                </div>
                <div className={cx('wrapper-topic_item-question')}>
                    {IsCheck &&
                        PostData.map((item, index) => {
                            if (index > 3 && index <= 9) {
                                return (
                                    <Link to={item.link}>
                                        <p className={cx('topic_item-question')}>{item.title}</p>
                                    </Link>
                                );
                            }
                        })}
                </div>
            </div>
        </div>
    );
}

export default PostByTopic;
