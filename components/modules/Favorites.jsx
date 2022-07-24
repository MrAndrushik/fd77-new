import styles from "../../styles/modules/Favorites.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { clearLiked } from "../../redux/bucket";
import Catalog from "./Catalog";

const Favorites = () => {
    const dispatch = useDispatch();
    const liked = useSelector((state) => state.bucket.liked);

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Избранные</h1>
            {liked?.length > 0 ? (
                <>
                    <div className={styles.topBtn}>
                        <button onClick={() => dispatch(clearLiked())}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.25 2C13.0801 1.99995 13.8788 2.31755 14.4822 2.88767C15.0856 3.45779 15.448 4.23719 15.495 5.066L15.5 5.25H20.75C20.94 5.25006 21.1229 5.32224 21.2618 5.45197C21.4006 5.5817 21.4851 5.7593 21.498 5.94888C21.511 6.13846 21.4515 6.32589 21.3316 6.4733C21.2117 6.62071 21.0402 6.7171 20.852 6.743L20.75 6.75H19.954L18.674 19.77C18.6099 20.4191 18.3171 21.0243 17.848 21.4775C17.3789 21.9306 16.7639 22.2023 16.113 22.244L15.937 22.25H8.563C7.91046 22.25 7.27919 22.0179 6.78201 21.5953C6.28482 21.1727 5.95412 20.587 5.849 19.943L5.826 19.769L4.545 6.75H3.75C3.56876 6.74999 3.39366 6.68436 3.25707 6.56523C3.12048 6.44611 3.03165 6.28155 3.007 6.102L3 6C3.00001 5.81876 3.06564 5.64366 3.18477 5.50707C3.30389 5.37048 3.46845 5.28165 3.648 5.257L3.75 5.25H9C9 4.38805 9.34241 3.5614 9.9519 2.9519C10.5614 2.34241 11.388 2 12.25 2ZM18.447 6.75H6.052L7.319 19.622C7.34705 19.9092 7.47362 20.1779 7.67722 20.3824C7.88082 20.5869 8.14892 20.7147 8.436 20.744L8.563 20.75H15.937C16.537 20.75 17.046 20.325 17.162 19.748L17.182 19.622L18.446 6.75H18.447ZM14 9.5C14.1812 9.50001 14.3563 9.56564 14.4929 9.68477C14.6295 9.80389 14.7184 9.96845 14.743 10.148L14.75 10.25V17.25C14.7499 17.44 14.6778 17.6229 14.548 17.7618C14.4183 17.9006 14.2407 17.9851 14.0511 17.998C13.8615 18.011 13.6741 17.9515 13.5267 17.8316C13.3793 17.7117 13.2829 17.5402 13.257 17.352L13.25 17.25V10.25C13.25 10.0511 13.329 9.86032 13.4697 9.71967C13.6103 9.57902 13.8011 9.5 14 9.5ZM10.5 9.5C10.6812 9.50001 10.8563 9.56564 10.9929 9.68477C11.1295 9.80389 11.2184 9.96845 11.243 10.148L11.25 10.25V17.25C11.2499 17.44 11.1778 17.6229 11.048 17.7618C10.9183 17.9006 10.7407 17.9851 10.5511 17.998C10.3615 18.011 10.1741 17.9515 10.0267 17.8316C9.87929 17.7117 9.7829 17.5402 9.757 17.352L9.75 17.25V10.25C9.75 10.0511 9.82902 9.86032 9.96967 9.71967C10.1103 9.57902 10.3011 9.5 10.5 9.5ZM12.25 3.5C11.8108 3.50002 11.3877 3.66517 11.0646 3.96268C10.7415 4.26019 10.5421 4.6683 10.506 5.106L10.5 5.25H14C14 4.78587 13.8156 4.34075 13.4874 4.01256C13.1592 3.68437 12.7141 3.5 12.25 3.5Z"
                                    fill="#646464"
                                />
                            </svg>
                            Очистить избранные
                        </button>
                    </div>
                    <Catalog
                        style={{ paddingTop: 0 }}
                        arr={liked}
                        bucket={true}
                    />
                </>
            ) : (
                <h2 className="stn-title">У вас нет избранных</h2>
            )}
        </div>
    );
};

export default Favorites;
