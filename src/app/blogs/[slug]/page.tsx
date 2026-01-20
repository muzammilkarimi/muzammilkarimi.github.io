
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "../../../lib/blog-data";
import BlogClient from "./blog-client";
import { Metadata } from "next";

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Muzammil Ahmad Karimi`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogClient post={post} />;
}
