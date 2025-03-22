export interface NewsArticle {
    title: string;
    description: string;
    url: string;
    image: string;
    source: {
        name: string;
    }
    publishedAt: string;
}

export interface CachedData {
    data: NewsArticle[];
    timestamp: number;
}

export interface RedditPost {
    title: string;
    url: string;
    subreddit: string;
    upvotes: number;
    comments: number;
}

export interface ChartData {
    Country: string;
    Girls: number;
    Boys: number;
    Women: number;
    Men: number;
}

export interface SkeletonCardProps {
    imageHeight?: string;
    titleWidth?: string;
    descriptionLines?: number;
    cardWidth?: string;
    flex?: string;
}