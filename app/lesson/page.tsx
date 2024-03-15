import { getLesson, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import { Quiz } from "./quiz";

const LessonPage = async () => {
  const lesson = await getLesson();
  const userProgress = await getUserProgress();

  if (!lesson || !userProgress) {
    redirect("/learn");
  }

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;
  return (
    <Quiz
      initialPercentage={initialPercentage}
      initialLessonId={lesson.id}
      initialHearts={userProgress.hearts}
      initialLessonChallenges={lesson.challenges}
      userSubscription={null}
    />
  );
};

export default LessonPage;
