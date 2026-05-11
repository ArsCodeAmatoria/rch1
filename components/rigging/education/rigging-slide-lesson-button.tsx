import {Link} from "@/i18n/navigation";
import {Button} from "@/components/ui/button";

export function RiggingSlideLessonButton({moduleSlug}: {moduleSlug: string}) {
  return (
    <div className="not-prose pt-1">
      <Button asChild size="sm">
        <Link href={`/rigging/education/slides/${moduleSlug}` as never}>Slide lesson (presenter mode)</Link>
      </Button>
    </div>
  );
}
