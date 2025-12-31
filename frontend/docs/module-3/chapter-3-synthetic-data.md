# Chapter 3: Synthetic Data Generation

In this chapter, we will explore how to generate synthetic data from Isaac Sim. Synthetic data is a powerful tool for training and testing perception algorithms without the need for real-world data collection.

## Concepts and Workflows

The basic workflow for synthetic data generation is as follows:

1.  **Create a Scene**: Set up a scene in Isaac Sim with the robot, objects of interest, and appropriate lighting.
2.  **Randomize the Scene**: To create a diverse dataset, you can randomize various aspects of the scene, such as object poses, lighting conditions, and textures. This is known as *domain randomization*.
3.  **Attach Sensors**: Attach virtual sensors to the robot, such as cameras, depth sensors, and LiDARs.
4.  **Collect Data**: Run the simulation and collect data from the sensors. This data can include images, depth maps, point clouds, and ground truth information like object poses and segmentation masks.
5.  **Export Data**: Export the collected data in a format that can be used by your machine learning pipeline.

## Hands-on Example: Generating a Small Dataset

Here is a Python script that demonstrates how to generate a small dataset of images with bounding box annotations.

```python
from omni.isaac.kit import SimulationApp

# Start the simulation
simulation_app = SimulationApp({"headless": False})

from omni.isaac.core import World
from omni.isaac.core.objects import VisualCuboid
from omni.isaac.core.utils.prims import define_prim, get_prim_at_path
import omni.isaac.core.utils.numpy.rotations as rot_utils
import numpy as np
import os

# Create a new world
my_world = World()

# Add a cube to the world
cube = my_world.scene.add(
    VisualCuboid(
        prim_path="/World/random_cube",
        name="my_cube",
        position=np.array([0, 0, 1.0]),
        size=0.1,
        color=np.array([1.0, 0, 0]),
    )
)

# TODO: Add a camera to the world

# Reset the world
my_world.reset()

# Run the simulation and collect data
for i in range(100):
    # Randomize the cube's position
    cube.set_world_pose(position=np.random.rand(3) * 2.0)
    my_world.step()
    
    # TODO: Capture image and bounding box data
    
    # Save the data
    # (This is a placeholder for the actual data saving logic)
    print(f"Saving data for frame {i}")


# Shutdown the simulation
simulation_app.close()

```

*(Note: This script is a template and requires a camera setup and data writing logic to be fully functional.)*

## Common Labeling Formats

When you generate synthetic data, you also need to generate labels. Common formats include:

-   **Bounding Boxes**: 2D or 3D boxes that enclose an object. They are typically represented by the coordinates of their corners.
-   **Segmentation Masks**: A pixel-level mask that indicates which pixels in an image belong to an object.
-   **Depth Maps**: An image where each pixel's value represents the distance from the camera to the object at that pixel.

Isaac Sim provides tools to generate these labels automatically.

## Exporting the Dataset

Once you have collected the data and labels, you need to export them in a format that your training framework understands. Common dataset formats include:

-   **KITTI**: A popular format for autonomous driving datasets.
-   **COCO**: A widely used format for object detection, segmentation, and captioning datasets.

You will need to write custom scripts to format your generated data into these formats. There are also tools available that can help with this process. The clarification for this spec (`FR-009`) mandates that this module covers these formats.