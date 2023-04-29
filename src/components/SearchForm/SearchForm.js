import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import styles from './SearchForm.module.scss';
import { Form, Link } from 'react-router-dom';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function SearchForm(props) {
    const { value, onChange, onSubmit } = props;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-search')}>
                <form className={cx('wrapper-search_form')} onSubmit={onSubmit}>
                    <div className={cx('wrapper-search_input')}>
                        <input type="text" value={value.value} onChange={onChange} placeholder="Từ khóa tìm kiếm ..." />
                    </div>
                    <div className={cx('wrapper-search_submit')}>
                        <input type="submit" value="Tìm kiếm" />
                    </div>
                </form>
            </div>
            <div className={cx('wrapper-example')}>
                <div className={cx('wrapper-example')}>
                    <span className={cx('wrapper-example_all')}>
                        VD:{' '}
                        <Link to={'#'} className={cx('wrapper-example_content')}>
                            đơn ly hôn
                        </Link>
                        ,{' '}
                        <Link to={'#'} className={cx('wrapper-example_content')}>
                            ly hôn đơn phương
                        </Link>
                        ,{' '}
                        <Link to={'#'} className={cx('wrapper-example_content')}>
                            tư vấn luật
                        </Link>
                        ,{' '}
                        <Link to={'#'} className={cx('wrapper-example_content')}>
                            tư vấn pháp luật
                        </Link>
                        ,{' '}
                        <Link to={'#'} className={cx('wrapper-example_content')}>
                            đơn khởi kiện
                        </Link>
                        ,{' '}
                        <Link to={'#'} className={cx('wrapper-example_content')}>
                            công ty luật
                        </Link>
                        ,{' '}
                        <Link to={'#'} className={cx('wrapper-example_content')}>
                            luật sư tư vấn
                        </Link>
                        .
                    </span>
                </div>
                <div className={cx('wrapper-image_hotline')}>
                    <Link to={'#'} className={cx('wrapper-image_hotline-link')}>
                        <img src={images.counSelors1} alt="hot line" className={cx('wrapper-image_hotline-img')} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SearchForm;
