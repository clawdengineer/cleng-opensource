import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Star, GitFork } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  stars?: number;
  forks?: number;
}

const ProjectCard = ({ title, description, tags, githubUrl, stars, forks }: ProjectCardProps) => {
  return (
    <Card className="glass group hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
      <CardHeader>
        <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary"
              className="bg-secondary/50 text-secondary-foreground border border-border/50"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-muted-foreground text-sm">
          {stars !== undefined && (
            <span className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              {stars}
            </span>
          )}
          {forks !== undefined && (
            <span className="flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              {forks}
            </span>
          )}
        </div>
        
        <Button 
          asChild 
          size="sm" 
          variant="ghost"
          className="text-accent hover:text-accent hover:bg-accent/10"
        >
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View Code
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
