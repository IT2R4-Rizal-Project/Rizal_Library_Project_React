import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

interface ChapterCardProps {
  number: number;
  title: string;
  description: string;
  link: string;
  available?: boolean;
}

const ChapterCard = ({ number, title, description, link, available = true }: ChapterCardProps) => {
  return (
    <Card className={`h-full flex flex-col ${!available ? 'opacity-75' : ''}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold">
            {number}
          </div>
          {!available && (
            <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md">
              Coming Soon
            </span>
          )}
        </div>
        <CardTitle className="text-xl mt-3 line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="pt-4">
        {available ? (
          <Link 
            to={link} 
            className="flex items-center text-primary font-medium hover:underline"
          >
            Start Learning <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        ) : (
          <span className="text-gray-400 flex items-center">
            Coming Soon <ArrowRight className="ml-2 h-4 w-4" />
          </span>
        )}
      </CardFooter>
    </Card>
  );
};

export default ChapterCard;
