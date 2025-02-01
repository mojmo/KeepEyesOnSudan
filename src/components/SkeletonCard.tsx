import  "@styles/skeletonCard.css";

interface SkeletonCardProps {
    imageHeight?: string;
    titleWidth?: string;
    descriptionLines?: number;
    cardWidth?: string;
    flex?: string;
}

const SkeletonCard: React.FC<SkeletonCardProps> = ({
        imageHeight = '150px',
        titleWidth = '80%',
        descriptionLines = 3,
        cardWidth = 'calc(50% - 1rem)',
        flex = "",
    }) => {
    return (
        <div className="skeleton-card" style={{ width: cardWidth, flex: flex }}>
        <div
            className="skeleton-card__image"
            style={{ height: imageHeight }}
        ></div>
        <div
            className="skeleton-card__title"
            style={{ width: titleWidth }}
        ></div>
        {[...Array(descriptionLines)].map((_, index) => (
            <div
            key={index}
            className="skeleton-card__description"
            ></div>
        ))}
        </div>
    );
};

export default SkeletonCard;